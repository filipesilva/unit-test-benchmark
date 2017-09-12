import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4107Component } from './my-comp-4107.component';

describe('MyComp4107Component', () => {
  let component: MyComp4107Component;
  let fixture: ComponentFixture<MyComp4107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
