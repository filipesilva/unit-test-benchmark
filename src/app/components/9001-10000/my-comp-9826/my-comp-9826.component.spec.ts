import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9826Component } from './my-comp-9826.component';

describe('MyComp9826Component', () => {
  let component: MyComp9826Component;
  let fixture: ComponentFixture<MyComp9826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
