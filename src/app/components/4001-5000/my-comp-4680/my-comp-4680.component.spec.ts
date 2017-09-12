import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4680Component } from './my-comp-4680.component';

describe('MyComp4680Component', () => {
  let component: MyComp4680Component;
  let fixture: ComponentFixture<MyComp4680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
