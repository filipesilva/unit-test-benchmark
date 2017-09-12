import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2024Component } from './my-comp-2024.component';

describe('MyComp2024Component', () => {
  let component: MyComp2024Component;
  let fixture: ComponentFixture<MyComp2024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
