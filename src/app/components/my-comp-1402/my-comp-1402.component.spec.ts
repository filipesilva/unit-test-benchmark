import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1402Component } from './my-comp-1402.component';

describe('MyComp1402Component', () => {
  let component: MyComp1402Component;
  let fixture: ComponentFixture<MyComp1402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
