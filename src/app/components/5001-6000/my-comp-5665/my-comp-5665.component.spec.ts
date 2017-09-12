import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5665Component } from './my-comp-5665.component';

describe('MyComp5665Component', () => {
  let component: MyComp5665Component;
  let fixture: ComponentFixture<MyComp5665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
