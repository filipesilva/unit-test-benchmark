import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4586Component } from './my-comp-4586.component';

describe('MyComp4586Component', () => {
  let component: MyComp4586Component;
  let fixture: ComponentFixture<MyComp4586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
