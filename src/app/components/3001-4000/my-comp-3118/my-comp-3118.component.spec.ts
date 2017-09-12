import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3118Component } from './my-comp-3118.component';

describe('MyComp3118Component', () => {
  let component: MyComp3118Component;
  let fixture: ComponentFixture<MyComp3118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
