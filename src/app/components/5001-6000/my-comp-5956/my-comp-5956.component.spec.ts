import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5956Component } from './my-comp-5956.component';

describe('MyComp5956Component', () => {
  let component: MyComp5956Component;
  let fixture: ComponentFixture<MyComp5956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
