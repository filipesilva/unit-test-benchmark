import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8071Component } from './my-comp-8071.component';

describe('MyComp8071Component', () => {
  let component: MyComp8071Component;
  let fixture: ComponentFixture<MyComp8071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
