import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5361Component } from './my-comp-5361.component';

describe('MyComp5361Component', () => {
  let component: MyComp5361Component;
  let fixture: ComponentFixture<MyComp5361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
