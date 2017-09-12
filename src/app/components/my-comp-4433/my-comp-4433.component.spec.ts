import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4433Component } from './my-comp-4433.component';

describe('MyComp4433Component', () => {
  let component: MyComp4433Component;
  let fixture: ComponentFixture<MyComp4433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
