import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8629Component } from './my-comp-8629.component';

describe('MyComp8629Component', () => {
  let component: MyComp8629Component;
  let fixture: ComponentFixture<MyComp8629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
