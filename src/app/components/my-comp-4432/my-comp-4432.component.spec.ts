import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4432Component } from './my-comp-4432.component';

describe('MyComp4432Component', () => {
  let component: MyComp4432Component;
  let fixture: ComponentFixture<MyComp4432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
