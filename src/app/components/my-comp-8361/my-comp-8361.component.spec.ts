import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8361Component } from './my-comp-8361.component';

describe('MyComp8361Component', () => {
  let component: MyComp8361Component;
  let fixture: ComponentFixture<MyComp8361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
