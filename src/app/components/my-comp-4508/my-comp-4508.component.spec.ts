import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4508Component } from './my-comp-4508.component';

describe('MyComp4508Component', () => {
  let component: MyComp4508Component;
  let fixture: ComponentFixture<MyComp4508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
