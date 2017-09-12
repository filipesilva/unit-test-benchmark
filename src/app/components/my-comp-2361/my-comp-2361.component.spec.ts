import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2361Component } from './my-comp-2361.component';

describe('MyComp2361Component', () => {
  let component: MyComp2361Component;
  let fixture: ComponentFixture<MyComp2361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
