import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7381Component } from './my-comp-7381.component';

describe('MyComp7381Component', () => {
  let component: MyComp7381Component;
  let fixture: ComponentFixture<MyComp7381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
