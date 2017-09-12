import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4612Component } from './my-comp-4612.component';

describe('MyComp4612Component', () => {
  let component: MyComp4612Component;
  let fixture: ComponentFixture<MyComp4612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
