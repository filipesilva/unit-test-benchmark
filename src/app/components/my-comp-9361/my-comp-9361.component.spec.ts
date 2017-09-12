import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9361Component } from './my-comp-9361.component';

describe('MyComp9361Component', () => {
  let component: MyComp9361Component;
  let fixture: ComponentFixture<MyComp9361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
