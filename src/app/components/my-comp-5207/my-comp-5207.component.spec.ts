import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5207Component } from './my-comp-5207.component';

describe('MyComp5207Component', () => {
  let component: MyComp5207Component;
  let fixture: ComponentFixture<MyComp5207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
