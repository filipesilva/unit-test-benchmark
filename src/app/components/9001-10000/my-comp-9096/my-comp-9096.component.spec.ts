import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9096Component } from './my-comp-9096.component';

describe('MyComp9096Component', () => {
  let component: MyComp9096Component;
  let fixture: ComponentFixture<MyComp9096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
