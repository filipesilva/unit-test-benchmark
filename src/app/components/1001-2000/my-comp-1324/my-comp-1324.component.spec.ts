import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1324Component } from './my-comp-1324.component';

describe('MyComp1324Component', () => {
  let component: MyComp1324Component;
  let fixture: ComponentFixture<MyComp1324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
