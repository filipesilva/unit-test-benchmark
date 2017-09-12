import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8096Component } from './my-comp-8096.component';

describe('MyComp8096Component', () => {
  let component: MyComp8096Component;
  let fixture: ComponentFixture<MyComp8096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
