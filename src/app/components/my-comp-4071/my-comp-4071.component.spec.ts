import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4071Component } from './my-comp-4071.component';

describe('MyComp4071Component', () => {
  let component: MyComp4071Component;
  let fixture: ComponentFixture<MyComp4071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
