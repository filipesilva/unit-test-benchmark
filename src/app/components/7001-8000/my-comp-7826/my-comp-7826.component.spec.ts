import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7826Component } from './my-comp-7826.component';

describe('MyComp7826Component', () => {
  let component: MyComp7826Component;
  let fixture: ComponentFixture<MyComp7826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
