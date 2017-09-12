import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5864Component } from './my-comp-5864.component';

describe('MyComp5864Component', () => {
  let component: MyComp5864Component;
  let fixture: ComponentFixture<MyComp5864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
