import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7361Component } from './my-comp-7361.component';

describe('MyComp7361Component', () => {
  let component: MyComp7361Component;
  let fixture: ComponentFixture<MyComp7361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
