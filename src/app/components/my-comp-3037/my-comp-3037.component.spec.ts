import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3037Component } from './my-comp-3037.component';

describe('MyComp3037Component', () => {
  let component: MyComp3037Component;
  let fixture: ComponentFixture<MyComp3037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
