import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1654Component } from './my-comp-1654.component';

describe('MyComp1654Component', () => {
  let component: MyComp1654Component;
  let fixture: ComponentFixture<MyComp1654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
