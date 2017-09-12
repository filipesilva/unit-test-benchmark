import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9622Component } from './my-comp-9622.component';

describe('MyComp9622Component', () => {
  let component: MyComp9622Component;
  let fixture: ComponentFixture<MyComp9622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
