import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5185Component } from './my-comp-5185.component';

describe('MyComp5185Component', () => {
  let component: MyComp5185Component;
  let fixture: ComponentFixture<MyComp5185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
