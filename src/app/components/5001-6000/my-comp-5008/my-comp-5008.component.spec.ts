import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5008Component } from './my-comp-5008.component';

describe('MyComp5008Component', () => {
  let component: MyComp5008Component;
  let fixture: ComponentFixture<MyComp5008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
