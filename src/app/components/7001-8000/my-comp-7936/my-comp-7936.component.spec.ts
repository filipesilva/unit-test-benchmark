import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7936Component } from './my-comp-7936.component';

describe('MyComp7936Component', () => {
  let component: MyComp7936Component;
  let fixture: ComponentFixture<MyComp7936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
