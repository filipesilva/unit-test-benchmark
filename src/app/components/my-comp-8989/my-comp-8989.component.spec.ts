import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8989Component } from './my-comp-8989.component';

describe('MyComp8989Component', () => {
  let component: MyComp8989Component;
  let fixture: ComponentFixture<MyComp8989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
