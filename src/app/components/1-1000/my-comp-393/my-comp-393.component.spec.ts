import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp393Component } from './my-comp-393.component';

describe('MyComp393Component', () => {
  let component: MyComp393Component;
  let fixture: ComponentFixture<MyComp393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
