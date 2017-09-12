import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp946Component } from './my-comp-946.component';

describe('MyComp946Component', () => {
  let component: MyComp946Component;
  let fixture: ComponentFixture<MyComp946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
