import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4188Component } from './my-comp-4188.component';

describe('MyComp4188Component', () => {
  let component: MyComp4188Component;
  let fixture: ComponentFixture<MyComp4188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
