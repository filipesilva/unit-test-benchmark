import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3361Component } from './my-comp-3361.component';

describe('MyComp3361Component', () => {
  let component: MyComp3361Component;
  let fixture: ComponentFixture<MyComp3361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
