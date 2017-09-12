import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7738Component } from './my-comp-7738.component';

describe('MyComp7738Component', () => {
  let component: MyComp7738Component;
  let fixture: ComponentFixture<MyComp7738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
