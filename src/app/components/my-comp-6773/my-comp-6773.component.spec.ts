import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6773Component } from './my-comp-6773.component';

describe('MyComp6773Component', () => {
  let component: MyComp6773Component;
  let fixture: ComponentFixture<MyComp6773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
