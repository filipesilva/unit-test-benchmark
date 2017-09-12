import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3523Component } from './my-comp-3523.component';

describe('MyComp3523Component', () => {
  let component: MyComp3523Component;
  let fixture: ComponentFixture<MyComp3523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
