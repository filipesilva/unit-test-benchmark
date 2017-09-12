import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1071Component } from './my-comp-1071.component';

describe('MyComp1071Component', () => {
  let component: MyComp1071Component;
  let fixture: ComponentFixture<MyComp1071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
