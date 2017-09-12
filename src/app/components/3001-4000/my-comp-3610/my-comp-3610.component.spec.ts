import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3610Component } from './my-comp-3610.component';

describe('MyComp3610Component', () => {
  let component: MyComp3610Component;
  let fixture: ComponentFixture<MyComp3610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
