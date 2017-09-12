import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5893Component } from './my-comp-5893.component';

describe('MyComp5893Component', () => {
  let component: MyComp5893Component;
  let fixture: ComponentFixture<MyComp5893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
