import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4935Component } from './my-comp-4935.component';

describe('MyComp4935Component', () => {
  let component: MyComp4935Component;
  let fixture: ComponentFixture<MyComp4935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
