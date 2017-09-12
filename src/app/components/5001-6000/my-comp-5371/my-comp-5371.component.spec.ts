import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5371Component } from './my-comp-5371.component';

describe('MyComp5371Component', () => {
  let component: MyComp5371Component;
  let fixture: ComponentFixture<MyComp5371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
