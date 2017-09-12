import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3475Component } from './my-comp-3475.component';

describe('MyComp3475Component', () => {
  let component: MyComp3475Component;
  let fixture: ComponentFixture<MyComp3475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
