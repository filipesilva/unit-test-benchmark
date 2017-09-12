import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6333Component } from './my-comp-6333.component';

describe('MyComp6333Component', () => {
  let component: MyComp6333Component;
  let fixture: ComponentFixture<MyComp6333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
