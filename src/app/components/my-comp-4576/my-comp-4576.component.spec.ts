import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4576Component } from './my-comp-4576.component';

describe('MyComp4576Component', () => {
  let component: MyComp4576Component;
  let fixture: ComponentFixture<MyComp4576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
