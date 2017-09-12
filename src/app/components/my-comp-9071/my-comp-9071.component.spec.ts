import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9071Component } from './my-comp-9071.component';

describe('MyComp9071Component', () => {
  let component: MyComp9071Component;
  let fixture: ComponentFixture<MyComp9071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
