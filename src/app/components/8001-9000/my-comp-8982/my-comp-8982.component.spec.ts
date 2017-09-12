import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8982Component } from './my-comp-8982.component';

describe('MyComp8982Component', () => {
  let component: MyComp8982Component;
  let fixture: ComponentFixture<MyComp8982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
