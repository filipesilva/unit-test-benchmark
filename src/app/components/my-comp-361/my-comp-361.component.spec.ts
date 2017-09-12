import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp361Component } from './my-comp-361.component';

describe('MyComp361Component', () => {
  let component: MyComp361Component;
  let fixture: ComponentFixture<MyComp361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
