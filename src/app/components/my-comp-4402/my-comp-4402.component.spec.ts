import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4402Component } from './my-comp-4402.component';

describe('MyComp4402Component', () => {
  let component: MyComp4402Component;
  let fixture: ComponentFixture<MyComp4402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
